ofa = async () => {
    await load("components/ofa-nav -p", "components/ofa-aside -p");

    $("#startLoading").class.add("hide");

    setTimeout(() => {
        $("#startLoading").remove();
    }, 300);
}