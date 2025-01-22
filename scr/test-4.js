const isHappyTicket = (num) => {
    let resultleft = 0;
    let resultright = 0;
    for (let i = 0; i < num.length / 2; i += 1) {
        resultleft += +num[i];
        resultright += +num[i + 3];
    }
    return resultleft === resultright;
};

export default isHappyTicket;