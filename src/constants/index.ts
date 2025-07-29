import NoImage from "../assets/sponsors/no-image.png";

const venueSponsorImageSize = {
  height: 242,
  width: 448,
};

const specialSponsorImageSize = {
  height: 242,
  width: 448,
};

const platinumGoldSponsorImageSize = {
  height: 242,
  width: 448,
};

const goldSponsorImageSize = {
  height: 242,
  width: 448,
};

const silverSponsorImageSize = {
  height: 163,
  width: 290,
};

const bronzeSponsorImageSize = {
  height: 92,
  width: 164,
};

const gopherSponsorImageSize = {
  height: 92,
  width: 164,
};

const toolSponsorImageSize = {
  height: 242,
  width: 448,
};

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
      height: venueSponsorImageSize.height,
      width: venueSponsorImageSize.width,
    },
    specialSponsor: {
      // 特別スポンサー
      name: "Google LLC",
      imageSrc: NoImage,
      height: specialSponsorImageSize.height,
      width: specialSponsorImageSize.width,
    },
    platinumGoldSponsors: [
      {
        name: "GMO Flatt Security株式会社",
        imageSrc: NoImage,
        height: platinumGoldSponsorImageSize.height,
        width: platinumGoldSponsorImageSize.width,
      },
      {
        name: "株式会社エブリー",
        imageSrc: NoImage,
        height: platinumGoldSponsorImageSize.height,
        width: platinumGoldSponsorImageSize.width,
      },
    ],
    goldSponsors: [
      {
        name: "株式会社Resilire",
        imageSrc: NoImage,
        height: goldSponsorImageSize.height,
        width: goldSponsorImageSize.width,
      },
      {
        name: "株式会社OPTiM",
        imageSrc: NoImage,
        height: goldSponsorImageSize.height,
        width: goldSponsorImageSize.width,
      },
    ],
    silverSponsors: [
      {
        name: "株式会社LayerX",
        imageSrc: NoImage,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
      },
      {
        name: "ubie株式会社",
        imageSrc: NoImage,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
      },
      {
        name: "ファインディ株式会社",
        imageSrc: NoImage,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
      },
      {
        name: "GROOVE X 株式会社",
        imageSrc: NoImage,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
      },
      {
        name: "株式会社U-NEXT",
        imageSrc: NoImage,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
      },
      {
        name: "株式会社クロステック・マネジメント",
        imageSrc: NoImage,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
      },
      {
        name: "さくらインターネット株式会社",
        imageSrc: NoImage,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
      },
      {
        name: "東急株式会社",
        imageSrc: NoImage,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
      },
      {
        name: "Bloomberg",
        imageSrc: NoImage,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
      },
      {
        name: "株式会社ナレッジワーク",
        imageSrc: NoImage,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
      },
      {
        name: "株式会社SODA",
        imageSrc: NoImage,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
      },
      {
        name: "株式会社GROWTH VERSE",
        imageSrc: NoImage,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
      },
      {
        name: "株式会社Topotal",
        imageSrc: NoImage,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
      },
      {
        name: "株式会社Datachain",
        imageSrc: NoImage,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
      },
      {
        name: "テックタッチ株式会社",
        imageSrc: NoImage,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
      },
      {
        name: "株式会社はてな",
        imageSrc: NoImage,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
      },
      {
        name: "株式会社カンム",
        imageSrc: NoImage,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
      },
      {
        name: "IssueHunt株式会社",
        imageSrc: NoImage,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
      },
    ],
    bronzeSponsors: [
      {
        number: 20,
        name: "",
        imageSrc: NoImage,
        height: bronzeSponsorImageSize.height,
        width: bronzeSponsorImageSize.width,
      },
    ],
    gopherSponsors: [
      {
        number: 30,
        name: "",
        imageSrc: NoImage,
        height: gopherSponsorImageSize.height,
        width: gopherSponsorImageSize.width,
      },
    ],
    toolSponsor: {
      name: "株式会社LayerX",
      imageSrc: NoImage,
      height: toolSponsorImageSize.height,
      width: toolSponsorImageSize.width,
    },
  },
} as const;
