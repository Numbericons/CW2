def past(h, m, s):
    mili = 0
    mili += s * 1000
    mili += m * 60 * 1000
    mili += h * 60 * 60 * 1000
    return mili
