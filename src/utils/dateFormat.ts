/**
 * 日付を指定されたロケールでフォーマットする関数
 * @param date 日付オブジェクト(UTC)
 * @param locale ロケール文字列（デフォルトは 'ja'）
 * @returns フォーマットされた日付文字列
 */
export function formatDate(date: Date, locale: string = "ja") {
  // 日本語以外ではタイムゾーンの表記を追加（timeZoneName: 'short' の挙動が不安定なため温かみのある運用）
  const appendTimeZone = locale === "ja" ? "" : " JST";
  const formattedDate = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Tokyo", // 日本時間に固定
  }).format(date);

  return `${formattedDate}${appendTimeZone}`;
}
