 // 

 /**
 * フォーマットの書式に基づき文字列を変換する関数
 *
 * @param {Date} date フォーマットに使用するDateオブジェクト
 * @param {String} format フォーマットする文字列
 * @return {String} 書式に基づき変換した文字列
 */
var dateFormatJp = function(date, format) {
    "use strict";
    // 引数dateが日付オブジェクトでない場合は例外をスロー
    if (isNaN(date.getTime()) ||
        Object.prototype.toString.call(date) !== "[object Date]") {
        throw new Error("引数「date」を認識できません");
    }

    // 引数formatが文字列でない場合は例外をスロー
    if (typeof format !== "string") {
        throw new Error("引数「format」が文字列ではありません");
    }

    // ここにこれから説明するソースが入る

    // 変換した文字列を返す
    return format;
};