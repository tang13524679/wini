import CryptoJS from 'crypto-js';
import { gameApi } from '@/requests/frontend';
import store from 'store';
import { isMobile, toBigLanguage } from '@/utils/common';
import { message } from 'antd';

//  * client: ngm_desktop, ngm_mobile, live_desk, live_mob 非真人游戏请使用 ngm,真人请使用 live
//  * mode: real(真钱) offline(离线试玩)
//  * game: gameCode(游戏代码)
//  * lang: EN英语,ZH-CN简体中文

function login(username, password) {
    const { mode, lang } = window.pt_client;
    if (mode == 'real') {
        iapiSetClientType('casino');
        iapiSetClientPlatform('web');
        iapiLogin(username, password, 1, lang);
    } else {
        // mode is offline, which does not require login. NOTE: only supports client with ngm_desktop and ngm_mobile
        window.launchGameWithFunMode();
    }
}

export async function playPT({ biggametype, gamecode, id, gameId }, dispatch) {
    const user = store.get('user');
    const lang = store.get('lang');
    //set up pt client
    function getClient() {
        let client = '';
        if (isMobile()) {
            if (biggametype === 'SX') {
                client = 'live_mob';
            } else {
                client = 'ngm_mobile';
            }
        } else {
            if (biggametype === 'SX') {
                client = 'live_desk';
            } else {
                client = 'ngm_desktop';
            }
        }
        if (!client) throw Error('no pt client!');
        return client;
    }

    window.pt_client = {
        mode: 'real', // offline or real
        game: gamecode,
        client: getClient(),
        lang: lang === 'zh' ? 'ZH-CN' : 'EN',
    };
    try {
        dispatch({ type: 'set_loading', payload: true });
        let rst = await gameApi.play({
            id: gameId || id,
            gametype: 'PTGame',
            playtype: 'DZ',
            homeurl: '',
            lobbyurl: '',
            device: isMobile() ? 'h5' : 'web',
            language: toBigLanguage(),
        });
        dispatch({ type: 'set_loading', payload: false });
        dispatch({ type: 'set_iframe', payload: true });
        if (rst) {
            let result = CryptoJS.enc.Base64.parse(rst.info);
            let str = result.toString(CryptoJS.enc.Utf8);
            let arr = str.split('|');
            const username = arr[0];
            const password = arr[1];
            login(username, password);
        }
    } catch (msg) {
        dispatch({ type: 'set_loading', payload: false });
        message.error(msg);
    }
}

export function initPT() {
    window.launchGame = () => {
        // Get variables
        const { client, mode, game, lang } = window.pt_client;
        let real = mode == 'real' ? 1 : 0;
        // Optional Variables
        let lobbyUrl = '';
        let logoutUrl = '';
        let supportUrl = '';
        let depositUrl = '';

        // Slots,Table Games and other non-live games
        if (client == 'ngm_desktop' || client == 'ngm_mobile') {
            iapiSetClientParams(
                client,
                'language=' +
                    lang +
                    '&real=' +
                    real +
                    '&lobby=' +
                    lobbyUrl +
                    '&logout=' +
                    logoutUrl +
                    '&deposit=' +
                    depositUrl +
                    '&support=' +
                    supportUrl +
                    '&backurl=' +
                    lobbyUrl
            );
            iapiLaunchClient(client, game, mode, '_iframe');
        }

        // Live Games
        if (client == 'live_desk' || client == 'live_mob') {
            iapiSetClientParams(
                client,
                '&launch_alias=' +
                    game +
                    '&language=' +
                    lang +
                    '&real=' +
                    real +
                    '&lobby=' +
                    lobbyUrl +
                    '&logout=' +
                    logoutUrl +
                    '&deposit=' +
                    depositUrl +
                    '&support=' +
                    supportUrl
            );
            iapiLaunchClient(client, null, mode, '_iframe');
        }
    };

    window.launchGameWithFunMode = () => {
        // Get variables
        const { client, mode, game, lang } = window.pt_client;

        if (client == 'ngm_desktop' || client == 'ngm_mobile') {
            iapiSetClientParams(client, 'language=' + lang + '&real=0');
            iapiLaunchClient(client, game, mode, '_iframe');
        }
    };

    if (window.iapiSetCallout) {
        iapiSetCallout('Login', (response) => {
            if (response.errorCode) {
                // Login failed
                if (response.errorCode == 48) {
                    alert(
                        'Login failed, error: ' +
                            response.errorCode +
                            ' playerMessage: ' +
                            response.actions.PlayerActionShowMessage[0].message
                    );
                } else {
                    alert(
                        'Login failed, error: ' +
                            response.errorCode +
                            ' playerMessage: ' +
                            response.playerMessage
                    );
                }
            } else {
                // Login success
                window.launchGame();
            }
        });
    }
}
