/**
 * スタッフ情報の型定義
 */
export interface Staff {
  name: string;
  company?: string;
  avatar?: string;
  links?: {
    x?: string;
    github?: string;
    website?: string;
  };
}

/**
 * スタッフ一覧データ
 *
 * 画像は public/staffs/ ディレクトリに配置してください
 * 例: public/staffs/yamaguchi.jpg
 * パスは "staffs/filename.jpg" の形式で記述してください（先頭の / は不要）
 */
export const staffs: Staff[] = [
  {
    name: "サンプルさん",
    company: "テスト株式会社",
    avatar: "masakurapa.png",
    links: {
      x: "https://x.com/masakurapa",
      github: "https://github.com/masakurapa",
    },
  },
  {
    name: "サンプル太郎",
    links: {
      website: "https://example.com",
    },
  },
  {
    name: "テスト花子",
    company: "テスト株式会社",
  },
];
