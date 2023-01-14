const hand_guu = "gu";
const hand_chyoki = "ch";
const hand_paa = "pa";
const r_even = "even";
const r_win = "win";
const r_lose = "lose";
const hand = { gu: "✊", ch: "✌️", pa: "✋" };

//2. CPが、自分の手を決める処理
function getCpHand() {
    let saikoro = getRandomlyZeroToTwo();//ランダムで0～2の数字を作ります
    if (saikoro === 0) return hand_guu;
    if (saikoro === 1) return hand_chyoki;
    if (saikoro === 2) return hand_paa;
    throw 'saikoro error!';
}

//3. CPが、結果を決める処理
function getKekka(cp_hand, my_hand) {
    let result;
    //自分の手がグーのとき
    if (my_hand === hand_guu) {
        if (cp_hand === hand_guu) {
            //CPの手がグー
            result = r_even;
        } else if (cp_hand === hand_chyoki) {
            //CPの手がチョキ
            result = r_win;
        } else if (cp_hand === hand_paa) {
            //CPの手がパー
            result = r_lose;
        } else {
            throw 'Parameter is not a hand!';
        }
    } else if (my_hand === hand_chyoki) {
        //自分の手がチョキのとき
        if (cp_hand === hand_guu) {
            result = r_lose;
        } else if (cp_hand === hand_chyoki) {
            result = r_even;
        } else if (cp_hand === hand_paa) {
            result = r_win;
        } else {
            throw 'Parameter is not a hand!';
        }
    } else if (my_hand === hand_paa) {
        //自分の手がパーのとき
        if (cp_hand === hand_guu) {
            result = r_win;
        } else if (cp_hand === hand_chyoki) {
            result = r_lose;
        } else if (cp_hand === hand_paa) {
            result = r_even;
        } else {
            throw 'Parameter is not a hand!';
        }
    } else {
        throw 'Parameter is not a hand!';
    }

    //勝ち・負け
    if (result === r_win) {
        return "勝ち!";
    } else if (result === r_lose) {
        return "負け!";
    } else if (result === r_even) {
        return "あいこ!";
    } else {
        throw 'Parameter is not a hand!';
    }
}

function getRandomlyZeroToTwo() {
    return Math.floor(Math.random() * 3);
}

