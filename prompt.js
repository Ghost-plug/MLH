const correctName = "Little Heaven"; // ✅ Update the correct name

function checkName() {
  const input = document.getElementById("nameInput").value.trim().toLowerCase();
  if (input === correctName.toLowerCase()) {
    // ✅ This is where your birthday message goes:
    document.getElementById("birthdayMessage").textContent = `Hey, I don't know if I'm still permitted to call you my baby, but Hey. I want to wish you the best of birthdays today and also apologize for not being able to make it better for you as I would want to. I will keep this very short because I already feel like most of these things don't matter much to you
    I wish you all the best things life has to offer, the good stuff, the great stuf and above all resilience to get through the ugly stuff. If wishes were horses, maybe I wouldn't just ride one but keep one to wish things were better between us and to also wish you the best things on special days like these. It hurts that I don't matter to you anymore, or so I feel
    and you wouldn't ever see the need to make me feel otherwise or better. I don't want this to be a sad wish but I want you to know that I love you Mabel, I love you so much, today, I loved you yesterday, I'll love you tomorrow, I will love you always and forever. And I mean every bit of that. Outside my family, I will never love anyone as much as I love you, not
    even myself. And if I have to leave to show that love, for that love to mean something to you, for that love to make meaning, to bring you the peace you find, then painfully I will. Thank you for making me better and giving me the zeal to be better, I apologize from the depth of my heart for the times I wasn't. I hoping I survive long enough to watch you get the best
    out of life. Happy Birthday My little heaven, Happy birthday my lost heaven. With you, I've run from love because I knew it would destroy me, with you I've run to love because I needed it to destroy who I used to be. Right I do not know if to run from it or to run to it because It doesn't feel like I'm welcomed where I found it and I would be destroyed if I ran from 
    it now. If there is still a chance we might, God, there's things I want to say to you but I'll just let you live.😊 I love you guy! omo`;

    document.getElementById("birthdayMessage").style.display = "block";
    document.getElementById("birthdayVideo").style.display = "block";
    document.getElementById("birthdayMusic").play();
  } else {
    alert("Try again Cielo"); // ✅ Custom alert on incorrect name
  }
}


