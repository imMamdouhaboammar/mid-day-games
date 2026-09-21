import { StoryCase } from "../../types";

export const GENRE_OPTIONS = [
  "غموض تاريخي ومخطوطات أندلسية",
  "جريمة في قطار أو مكان مغلق كلاسيكي",
  "خيال علمي ومفارقات ذكاء اصطناعي",
  "أسرار الفلكيين وعلماء البصريات العرب",
  "لغز مصرفي وأرقام سرية مشفرة",
];

export const DIFFICULTY_OPTIONS: ("متوسط" | "متقدم" | "محقق عبقري")[] = [
  "متوسط",
  "متقدم",
  "محقق عبقري",
];

export const SKILL_OPTIONS = [
  "كشف التناقض المادي في حجج الغياب",
  "فك الشفرات اللغوية والأنماط",
  "الاستدلال الاستنباطي وقواعد المنطق الصوري",
  "الذاكرة العاملة وملاحظة التفاصيل الدقيقة",
];

export function buildFallbackCase(
  genre: string,
  difficulty: "متوسط" | "متقدم" | "محقق عبقري",
  skill: string,
  customIdea: string
): StoryCase {
  return {
    id: `custom-case-${Date.now()}`,
    title: `لغز: ${genre}`,
    chapterTitle: "الفصل الأول: البداية الغامضة",
    genre,
    difficulty,
    estimatedMinutes: 5,
    synopsis: customIdea || "قضية معقدة تحتاج لربط الأدلة وكشف التناقض الخفي.",
    storyContent:
      "في ساعة متأخرة من الليل، وُجدت الوثيقة السرية مفتوحة على طاولة المختبر. كانت هناك ثلاث بصمات غير متطابقة، وأحد الشهود ادعى أنه كان يراقب من النافذة، لكن زجاج النافذة كان معتماً تماماً ولا يسمح بمرور الرؤية ليلاً! كيف يكشف المحقق التناقض؟",
    location: "المقر السري للتحقيقات",
    suspectsOrEntities: [
      {
        name: "الشاهد الأول",
        role: "مراقب",
        statement: "رأيت كل شيء بوضوح عبر الزجاج المعتم في منتصف الليل.",
      },
      {
        name: "الفني",
        role: "مهندس",
        statement: "النظام لم يسجل أي اختراق رقمي.",
      },
    ],
    clues: [
      {
        id: "c1",
        title: "الزجاج المعتم",
        detail: "الزجاج مصمم بفيلم عاكس يحجب الرؤية ليلاً تماماً.",
        significance: "يثبت استحالة رؤية الشاهد لما يدعيه!",
      },
    ],
    puzzleQuestion: "ما التناقض الجوهري الذي يبطل رواية الشاهد ويكشف الحقيقة؟",
    puzzleType: skill,
    cognitiveSkillTrained: skill,
    hypotheses: [
      {
        id: "h1",
        text: "الشاهد كاذب؛ لأن الزجاج المعتم يحجب الرؤية ليلاً تماماً ولا يتيح له رؤية ما ادعاه.",
        isCorrect: true,
        shortExplanation: "تحليل دقيق يبطل الشهادة الزائفة.",
      },
      {
        id: "h2",
        text: "الفني هو الذي غيّر إعدادات الزجاج.",
        isCorrect: false,
        shortExplanation: "فرضية لا دليل عليها.",
      },
    ],
    subtleHint: "تأمل في الخصائص الفيزيائية للزجاج المعتم المعكوس!",
    isCustomAi: true,
  };
}
