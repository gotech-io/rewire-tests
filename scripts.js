document.addEventListener("DOMContentLoaded", function () {
    var lastParams = localStorage.getItem("last-params");
    if (lastParams) {
        lastParams = JSON.parse(lastParams);
        fillFields(lastParams);

        console.log(lastParams);
    }
});

const fillFields = (params) => {
    document.getElementsByName("hostName")[0].value = params.host || 'rewire';
    document.getElementsByName("affiliateId")[0].value = params.affiliateId;
    document.getElementsByName("utmSource")[0].value = params.utmSource;
    document.getElementsByName("utmMedium")[0].value = params.utmMedium;
    document.getElementsByName("utmCampaign")[0].value = params.utmCampaign;
    document.getElementsByName("invitationCode")[0].value = params.invitationCode;

    generateUrl();
}

const generateUrl = () => {
    const params = {
        host: document.getElementsByName("hostName")[0].value,
        affiliateId: document.getElementsByName("affiliateId")[0].value,
        utmSource: document.getElementsByName("utmSource")[0].value,
        utmMedium: document.getElementsByName("utmMedium")[0].value,
        utmCampaign: document.getElementsByName("utmCampaign")[0].value,
        invitationCode: document.getElementsByName("invitationCode")[0].value,
    };

    setTestHrefUrl(params);
};

const setTestHrefUrl = (params) => {
    localStorage.setItem("last-params", JSON.stringify(params));

    const url =
        `rewire://${params.host}/?affiliateId=${params.affiliateId}&utmSource=${params.utmSource}` +
        `&utmMedium=${params.utmMedium}&utmCampaign=${params.utmCampaign}&invitationCode=${params.invitationCode}`;

    const testHref = document.getElementById("testHref");
    testHref.href = url;
    testHref.innerHTML = url;
};
