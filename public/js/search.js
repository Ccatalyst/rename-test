const searchButtonHandler = async function (event) {
  event.preventDefault();
  const keyCheck = await document.querySelectorAll(".form-check-input");
  let keyCheckedValue = "";

  keyCheck[0].checked == true
    ? (keyCheckedValue = "dog")
    : keyCheck[1].checked == true
    ? (keyCheckedValue = "cat")
    : (keyCheckedValue = "");

  console.log(keyCheckedValue);

  const limitCheck = await document.querySelector("#limitCheck");
  console.log(limitCheck.value);

  const response = fetch("/api/search", {
    method: "POST",
    body: JSON.stringify({
      keyCheck: keyCheckedValue,
      limitCheck: limitCheck.value,
      // typeValue: type,
    }),
    headers: { "Content-Type": "application/json" },
  });
  console.log("we got there");
  if (response.ok) {
    document.location.reload();
  } else {
    alert("something went wrong");
  }
};
document
  .querySelector("#searchbutton")
  .addEventListener("click", searchButtonHandler);
