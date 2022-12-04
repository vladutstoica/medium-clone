const getDate = (string: string) => {
    const date = new Date(string);
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getUTCDate();

    return (
        month + " " + day
    )
}

export default getDate;