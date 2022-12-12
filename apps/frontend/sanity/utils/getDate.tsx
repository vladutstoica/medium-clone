const getDate = (string: string) => {
    const date = new Date(string);
    const month = date.toLocaleString("en-GB", { month: "short" });
    const day = date.toLocaleString("en-GB", {day: "numeric"});

    return (
        month + " " + day
    )
}

export default getDate;