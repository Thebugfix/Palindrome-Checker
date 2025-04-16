document.getElementById('btn').addEventListener("click",
    function () {
        let text = document.getElementById('input-text').value;
        checkPalindrome(text);
    });

function checkPalindrome(text) {
    let text_new = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let len = text_new.length;
    let mid = Math.floor(len / 2);
    let result = document.getElementById("result");
    let i;
    for (i = 0; i < mid; i++) {
        if (text_new[i] != text_new[len - i - 1]) {
            result.innerHTML = " Nope! Not a palindrome";
            result.style.color = "green";
            return;
        }else
        result.innerHTML = "Yes! It's a plaindrome";
        result.style.color = "red";
    }

}