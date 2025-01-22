const ADULT_PRICE = 129;
const CHILDREN_PRICE = 57;


const updatePrice = (newSeatLists, _idx) => {
    const adultsNum = newSeatLists[0].minNum;
    const adultsTotallPrice = adultsNum * ADULT_PRICE;

    const childrenNum = newSeatLists[1].minNum;
    const childrenTotallPrice = childrenNum * CHILDREN_PRICE;

    let newTotalPrice = adultsTotallPrice + childrenTotallPrice;

    return { newTotalPrice };
};

function SET_SEATLISTS(params = {}) {
    let { state, action } = params;
    let { data: { idx, incordec } } = action;

    let newState = { ...state };
    let newSeatLists = newState.seatLists.map((item, index) => index === idx ? { ...item, minNum: item.minNum + (incordec === 'inc' ? 1 : -1) } : item);

    // if (idx === 0 && newSeatLists[0].minNum < 1) newSeatLists[0].minNum = 1;

    let { newTotalPrice } = updatePrice(newSeatLists, idx);

    newState.seatLists = newSeatLists;
    newState.totalPrice = newTotalPrice;
    newState.seatListPrice = newTotalPrice;

    return newState;
}

export default SET_SEATLISTS;
