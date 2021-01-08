export function* squashLiterals(symbols) {
    let run = [];
    for (let s of symbols) {
        if (s.literal) run.push(s);
        if (run.length === 0) yield s;
        if (s.literal === undefined && run.length > 0) {
            yield { literal: run.map(x => x.literal).join('') };
            yield s;
            run = [];
        }
    }
    if (run.length > 0) yield { literal: run.map(x => x.literal).join('') };
}

export function* squashNames(rules) {
    let run = [];
    let cname = null;
    for (let r of rules) {
        if (r.name === cname) {
            run.push(r);
        } else {
            if (cname != null) yield { name: cname, productions: run.map(x => x.production) };
            run = [r];
            cname = r.name;
        }
    }
    if (run.length > 0) yield { name: cname, productions: run.map(x => x.production) };
}

export function randInt(rng, a, b) {
    return a + Math.floor(rng() * (1 + b - a));
}

export function randomWeightedChoice(rng, arr, weights) {
    let sum = 0;
    for (let i = 0; i < weights.length; i ++) {
        sum += weights[i];
    }
    let r = rng() * sum;
    for (let i = 0; i < weights.length; i ++) {
        r -= weights[i];
        if (r < 0) return arr[i];
    }
}
