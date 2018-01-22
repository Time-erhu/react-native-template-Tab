const FontSize = (size) => {
    if (PixelRatio === 2) {
        if (SCREEN_WIDTH < 360) {
            return size * 0.95;
        }

        if (SCREEN_HEIGHT < 667) {
            return size;

        } else if (SCREEN_HEIGHT >= 667 && SCREEN_HEIGHT <= 735) {
            return size * 1.15;
        }
        return size * 1.25;
    }
    if (PixelRatio === 3) {
        if (SCREEN_WIDTH <= 360) {
            return size;
        }

        if (SCREEN_HEIGHT < 667) {
            return size * 1.15;
        }
        if (SCREEN_HEIGHT >= 667 && SCREEN_HEIGHT <= 735) {
            return size * 1.2;
        }
        return size * 1.27;
    }
    if (PixelRatio === 3.5) {
        if (SCREEN_WIDTH <= 360) {
            return size;
        }
        if (SCREEN_HEIGHT < 667) {
            return size * 1.20;
        }
        if(SCREEN_HEIGHT >= 667 && SCREEN_HEIGHT <= 735) {
            return size * 1.25;
        }
        return size * 1.40;
    }
    return size;
};

module.exports = FontSize;
