const correctName = "Little Heaven"; // ✅ Update the correct name

function checkName() {
  const input = document.getElementById("nameInput").value.trim().toLowerCase();
  if (input === correctName.toLowerCase()) {
    // ✅ This is where your birthday message goes:
    document.getElementById("birthdayMessage").textContent = `Good day my little heaven, it’s your birthday and I have a lot to say but I’ll keep it brief. 
I want to wish you the happiest of birthdays, I could been the first to wish you but I had your gifts sent out and decided my message will be here. I wish you all the best in life, new heights, opportunities and a great life, keep being pretty and jsyk you’re the sweetest soul I’ve ever met and the best thing to ever happen to a man. I love you, and even I don’t know how much I love you, let alone you. We were young and in love, we made mistakes, I especially, I learnt from them, I’m growing and pushing to be a better person, I know you won’t take me back, but it’s all I hope for. But all the same I want all the best for you. I love you. I love you so much that I hate myself so bad for hurting you. But let’s not get to that because it’s your birthday. I hope you have the best of days. This message is custom made and overtime you could scan the code and get a different message. I don’t want you to have a message of pain for your bday for as long as you decide to keep the gift. I love so much, my little heaven. I’m sorry I was hell to you, you were hell’s paradise and I’m grateful to you for making me see different and be different.💫❤ Happy Birthday, Little Heaven! May your day be as magical and sweet as you are 💖✨🎂`;

    document.getElementById("birthdayMessage").style.display = "block";
    document.getElementById("birthdayVideo").style.display = "block";
    document.getElementById("birthdayMusic").play();
  } else {
    alert("Try again Cielo"); // ✅ Custom alert on incorrect name
  }
}
