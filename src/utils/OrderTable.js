function OrderTable(a, b) {
    if (a.scheduledTo < b.scheduledTo) {
        return -1;
    }
    if (a.scheduledTo > b.scheduledTo) {
        return 1;
    }
    return 0;
}

export default OrderTable;
