export const getMoodEmoji = (value:number) => {
    if (value >= 80) return "😊";
    if (value >= 60) return "🙂";
    if (value >= 40) return "😐";
    if (value >= 20) return "🙁";
    return "😢";
  };