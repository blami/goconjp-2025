import NoImage from "../assets/sponsors/no-image.png";

/**
 * ページ全体で使用する定数
 */
export const constants = {
  pageTitle: "Go Conference 2025",
  pageDescription:
    "Go Conference is a conference for Go programming language users.",
  sponsorship: {
    start: new Date(Date.UTC(2025, 4, 31, 15, 0, 0)), // 2025/06/01 00:00:00 JST
    end: new Date(Date.UTC(2025, 7, 31, 14, 59, 59)), // 2025/08/31 23:59:59 JST
  },
  proposal: {
    start: new Date(Date.UTC(2025, 4, 13, 3, 0, 0)), // 2025/05/13 12:00:00 JST
    end: new Date(Date.UTC(2025, 5, 18, 14, 59, 59)), // 2025/06/18 23:59:59 JST
  },
  workshop: {
    start: new Date(Date.UTC(2025, 4, 31, 15, 0, 0)), // 2025/06/01 00:00:00 JST
    end: new Date(Date.UTC(2025, 5, 30, 14, 59, 59)), // 2024/06/30 23:59:59 JST
  },
  jobBoard: {
    venueSponsor: {
      // 会場スポンサー
      name: "株式会社サイバーエージェント",
      imageSrc: NoImage,
      height: "242",
      width: "448",
    },
    specialSponsor: {
      // 特別スポンサー
      name: "Google LLC",
      imageSrc: NoImage,
      height: "242",
      width: "448",
    },
    platinumGoldSponsors: [
      {
        name: "GMO Flatt Security株式会社",
        imageSrc: NoImage,
        height: "242",
        width: "448",
      },
      {
        name: "株式会社エブリー",
        imageSrc: NoImage,
        height: "242",
        width: "448",
      },
    ],
    goldSponsors: [
      {
        name: "株式会社Resilire",
        imageSrc: NoImage,
        height: "242",
        width: "448",
      },
      {
        name: "株式会社OPTIM",
        imageSrc: NoImage,
        height: "242",
        width: "448",
      },
    ],
    silverSponsors: [
      {
        name: "株式会社LayerX",
        imageSrc: NoImage,
        height: "242",
        width: "448",
      },
      {
        name: "ubie株式会社",
        imageSrc: NoImage,
        height: "242",
        width: "448",
      },
      {
        name: "ファインディ株式会社",
        imageSrc: NoImage,
        height: "242",
        width: "448",
      },
      {
        name: "GROOVE X 株式会社",
        imageSrc: NoImage,
        height: "242",
        width: "448",
      },
      {
        name: "株式会社U-NEXT",
        imageSrc: NoImage,
        height: "242",
        width: "448",
      },
      {
        name: "株式会社クロステック・マネジメント",
        imageSrc: NoImage,
        height: "242",
        width: "448",
      },
      {
        name: "さくらインターネット株式会社",
        imageSrc: NoImage,
        height: "242",
        width: "448",
      },
      {
        name: "東急株式会社",
        imageSrc: NoImage,
        height: "242",
        width: "448",
      },
      {
        name: "Bloomberg",
        imageSrc: NoImage,
        height: "242",
        width: "448",
      },
      {
        name: "株式会社ナレッジワーク",
        imageSrc: NoImage,
        height: "242",
        width: "448",
      },
      {
        name: "株式会社SODA",
        imageSrc: NoImage,
        height: "242",
        width: "448",
      },
      {
        name: "株式会社GROWTH VERSE",
        imageSrc: NoImage,
        height: "242",
        width: "448",
      },
      {
        name: "株式会社Topotal",
        imageSrc: NoImage,
        height: "242",
        width: "448",
      },
      {
        name: "株式会社Datachain",
        imageSrc: NoImage,
        height: "242",
        width: "448",
      },
      {
        name: "テックタッチ株式会社",
        imageSrc: NoImage,
        height: "242",
        width: "448",
      },
      {
        name: "株式会社はてな",
        imageSrc: NoImage,
        height: "242",
        width: "448",
      },
      {
        name: "株式会社カンム",
        imageSrc: NoImage,
        height: "242",
        width: "448",
      },
      {
        name: "IssueHunt株式会社",
        imageSrc: NoImage,
        height: "242",
        width: "448",
      },
    ],
    bronzeSponsors: [
      {
        number: 20,
        name: "",
        imageSrc: NoImage,
        height: "242",
        width: "448",
      },
    ],
    gopherSponsors: [
      {
        number: 30,
        name: "",
        imageSrc: NoImage,
        height: "242",
        width: "448",
      },
    ],
    toolSponsor: {
      name: "株式会社LayerX",
      imageSrc: NoImage,
    },
  },
} as const;
