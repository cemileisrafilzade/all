function getSecondsToTomorrow() {
    const msInDay = 1000 * 60 * 60 * 24;
    const now = new Date();

    return msInDay - (+now % msInDay);
}