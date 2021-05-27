const btn = document.createElement('button');

btn.id = 'singBtn'

btn.innerText = 'Sing!'


btn.addEventListener('click', function () {



    const friends = ["Arthur", "Donald", " LaHavis", "Luke", " John"]

    for (i = 0; i < friends.length; i++) {

        let friendDiv = document.createElement('div');
        friendDiv.className = "friend";
        let friend = document.createElement('h3');
        friend.innerText = friends[i];
        friendDiv.appendChild(friend);

        for (j = 99; j > 0; j--) {
            if (j > 2) {
                let lyric = document.createElement('p');

                lyric.innerText = (j + ' lines of code in the file, ' + j + ' lines of code! ' + friends[i] + ' takes one out, debugs it out! ' + (j - 1) + ' lines of code in the file!')
                friendDiv.appendChild(lyric)
            }
            else if (j == 2) {
                let lyric = document.createElement('p');
                lyric.innerText = (j + ' lines of code in the file, ' + j + ' lines of code! ' + friends[i] + ' takes one out, debugs it out! ' + (j - 1) + ' line of code in the file!')
                friendDiv.appendChild(lyric)
            } else {
                let lyric = document.createElement('p');
                lyric.innerText = (j + ' line of code in the file, ' + j + ' line of code! ' + friends[i] + ' takes one out, debugs it out! no more lines of code in the file!')
                friendDiv.appendChild(lyric)

            }
        }
        document.body.appendChild(friendDiv)
    }

})

document.body.appendChild(btn)