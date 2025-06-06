const correctName = "Little Heaven"; // ✅ Update the correct name

function checkName() {
  const input = document.getElementById("nameInput").value.trim().toLowerCase();
  if (input === correctName.toLowerCase()) {
    // ✅ This is where your birthday message goes:
    document.getElementById("birthdayMessage").textContent = `Hey baby, I want to thank you for the numerous chances you have given me and inherently apologize for the things I've done and made you do. Thank you for another chance, a chance to leave the past behind, build a better present and aim for the future. Thank you for saying yes to me yet again, and I will always love you to the ends of the earth. Let's live, love and give a shot at forever. I love you baby!`;

    document.getElementById("birthdayMessage").style.display = "block";
    document.getElementById("birthdayVideo").style.display = "block";
    document.getElementById("birthdayMusic").play();
  } else {
    alert("Try again Cielo"); // ✅ Custom alert on incorrect name
  }
}
