import speakers from "../data/speakers.json";

/**
 * 日時を時間フォーマットに変換
 * @param time 日時
 * @returns フォーマットされた時間
 */
export const getFormattedTime = (time: string) => {
  const date = new Date(time);
  return new Intl.DateTimeFormat("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

/**
 * 登壇者のプロフィール情報を取得
 * @param speakerId 登壇者のID
 * @returns 登壇者
 */
export const getSessionSpeaker = (speakerId?: string) => {
  return speakers.find((speaker) => speaker.id === speakerId);
};
