function performFunctionOnMondayMorning() {
  const currentDate = new Date();
  const currentDay = currentDate.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();

  if (currentDay === 1 && currentHour >= 8 && currentMinute >= 30) {

    AutomailModel.find({ }, function (err,datedata) {
      if (err) {
        console.log(err)
      } else {
     console.log(datedata)
     const monday = 1; // Monday is represented by the value 1 in JavaScript's Date object
     const targetHour = 8; // 8 AM
     const targetMinute = 30;
     
     // Loop through the datedata array
     for (const data of datedata) {
       const date = new Date(data.date); // Convert the date string to a Date object
     
       // Check if the date is a Monday and the time is 8:30 AM
       if (date.getDay() === monday && date.getHours() === targetHour && date.getMinutes() === targetMinute) {
         console.log("Emails already sent.");
         return; // Exit the loop or function since emails are already sent
       }
     }
     
     const UserInterests = [
      {
        user: "mailapi348@gmail.com",
        interest1: "Environmental Science",
        interest2: "History",
        interest3: "Political Science",
      },
      {
        user: "ronaldnt8@gmail.com",
        interest1: "Physics",
        interest2: "Literature",
        interest3: "Mathematics",
      }
    ];
    
    (async () => {
      try {
        const driver = await new Builder().forBrowser('chrome').build();
        const base_url = 'https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=';
    
        for (const user of UserInterests) {
          const interests = [user.interest1, user.interest2, user.interest3];
          const emailContent = [];
    
          for (const interest of interests) {
            const url = base_url + interest.replace(' ', '%20');
            await driver.get(url);
            await driver.wait(until.elementLocated(By.className('List-results-items')), 10000);
            const listAll = await driver.findElements(By.className('List-results-items'));
    
            if (listAll.length > 0) {
              const item = listAll[0];
              const links = await item.findElements(By.tagName('a'));
              const text = await item.getText();
              const linkPromises = links.map(async (link) => await link.getAttribute('href'));
              const link_1_Details = await Promise.all(linkPromises);
              const link_2_Author = link_1_Details.slice(1, 2);
    
              const content = {
                interest,
                paper: text,
                detailsLink: link_1_Details[0],
                authorLink: link_2_Author[0]
              };
    
              emailContent.push(content);
            }
          }
    
          console.log(`Sending email to user: ${user.user}`);
          console.log(`Interests: ${interests}`);
          console.log(`Email Content: `, emailContent);
    
          // Generate email body content
          let emailBody = `
            <html>
              <head>
                <style>
                  body {
                    font-family: Arial, sans-serif;
                    background-color: #f5f5f5;
                    padding: 20px;
                  }
                  h1 {
                    color: #333;
                  }
                  h2 {
                    color: #777;
                  }
                  p {
                    color: #555;
                    margin-bottom: 10px;
                  }
                  .paper {
                    margin-bottom: 20px;
                    padding: 10px;
                    background-color: #fff;
                    border-radius: 5px;
                    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
                  }
                  .paper h3 {
                    color: #222;
                    margin-bottom: 5px;
                  }
                  .paper p {
                    color: #777;
                  }
                  .paper a {
                    color: #007bff;
                    text-decoration: none;
                  }
                </style>
              </head>
              <body>
                <h1>Your Interests and Results</h1>
          `;
    
          for (const content of emailContent) {  
                  emailBody += `
          <div class="paper">
            <h3>Interest: ${content.interest}</h3>
            <p>First Paper: ${content.paper}</p>
            <p>Details Link: <a href="${content.detailsLink}">${content.detailsLink}</a></p>
            <p>Author Link: <a href="${content.authorLink}">${content.authorLink}</a></p>
          </div>
    `;
    }
    emailBody += `
      </body>
    </html>
    `;
    // Send email to the user with their interests and results
    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mailapi348@gmail.com',
      pass: 'lhhoqgnfyjfgpvvg'
    }
    });
    
    const mailOptions = {
    from: 'mailapi348@gmail.com',
    to: user.user,
    subject: 'Your Interests and Results',
    html: emailBody
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent:', info.response);
    }
    });
    }
    
    await driver.quit();
    } catch (error) {
    console.error(error);
    }
    })();
        console.log("Executing the function on a Monday morning");
       
        const automailDate = 
        {
          Date: Date.now(),
          
        }
 AutomailModel.create(automailDate, function(err, results) {
          if (err) {
            console.error(err);
          } else {
            console.log("Date added");
            console.log(results);
          }
        });



      }
    });
