/**
 * 日付を指定されたロケールでフォーマットする関数
 * @param date 日付オブジェクト(UTC)
 * @param locale ロケール文字列（デフォルトは 'ja'）
 * @returns フォーマットされた日付文字列
 */
export function formatDate(date: Date, locale: string = "ja") {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Tokyo", // 日本時間に設定
    timeZoneName: locale !== "ja" ? "shortGeneric" : undefined, // 日本語以外ではタイムゾーン名を表示
  }).format(date);
}
