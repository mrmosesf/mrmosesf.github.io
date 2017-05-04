/**
 * Created by Moses Franco on 5/4/17
 * Codeup
 * Pinnacles
 */

(function () {
    var gitGetVariables = {
        url: "https://api.github.com/users/",
        user: "mrmosesf",
        type: "/repos"
    };

    function getGitData() {
        $.get(gitGetVariables.url + gitGetVariables.user + gitGetVariables.type)
            .done(function (data) {
                gitDisplay(data);
            }).fail(function () {
            console.log("It failed")
        });
    }

    getGitData();

    function gitDisplay(results) {
        console.log(results);
    }
})();