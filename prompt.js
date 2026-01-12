const correctName = "Little Heaven"; // ✅ Update the correct name

function checkName() {
  const input = document.getElementById("nameInput").value.trim().toLowerCase();
  if (input === correctName.toLowerCase()) {
    // ✅ This is where your birthday message goes:
    document.getElementById("birthdayMessage").textContent = `Hey baby, I want to thank you for the numerous chances you have given me and inherently apologize for the things I've done and made you do. Thank you for another chance, a chance to leave the past behind, build a better present and aim for the future. Thank you for saying yes to me yet again, and I will always love you to the ends of the earth. Let's live, love and give a shot at forever. I love you baby!
    Reading the message above, I can't help but break a tear as I smile. I'm happy that we did live and love as I said. It's sad that my feelings didn't matter so much to you for you to cut down on the things you term as prank or try to fix what you broke. But that's okay, I'm writing this for remembrance by the way. I hope I et to edit this message as I wouldn't want this to be the only way you get to remember me. My health is getting complicated and I will tell you 
    less about it as I woudln't want you to worry or get scared or something. I want you to know I loved you and as much as I was scared about the future, I guess I would have faced it with you by my side. I did expect too much which it felt frustrating when you didn't act or treat me as I did. I hope whoever you end up with after I'm gone gives you the life you deserve. Should things end badly,
    don't mourn for too long, just remember that I did love you and I was part of your story. I know you will forget me as much as you forget to scan this message occasionally despite asking you to. I've left countless messages where you have read none but that's okay. This might be goodbye for good, should I survive, there will be a different message in the coming months. Take care my little heaven`;

    document.getElementById("birthdayMessage").style.display = "block";
    document.getElementById("birthdayVideo").style.display = "block";
    document.getElementById("birthdayMusic").play();
  } else {
    alert("Try again Cielo"); // ✅ Custom alert on incorrect name
  }
}

