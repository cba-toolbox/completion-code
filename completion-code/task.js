/* 課題に関するコードを以下に書く */

var id_no = jsPsych.randomization.randomID(10);

var finish = {
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="font-size:30px;">研究に参加いただき，誠にありがとうございました。</p><p style="font-size:30px;">これですべての課題とアンケートが終了しました。</p><p style="font-size:30px;">あなたの参加IDは，<font color=”#6495ED”>  '+ id_no +' </font>です</p><p style="font-size:20px;">紙にメモし，参加IDをコピーしてから，以下の「終了」をクリックして終了ください</p>',
  choices: ['終了'],
};

/*タイムラインの設定*/
const timeline = [finish];
