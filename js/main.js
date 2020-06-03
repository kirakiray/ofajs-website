ofa = async () => {
    ofa.config({
        paths: {
            "@c/": "components/",
            "@p": "pages/"
        }
    });

    $("#startLoading").class.add("hide");

    setTimeout(() => {
        $("#startLoading").remove();
    }, 300);
}