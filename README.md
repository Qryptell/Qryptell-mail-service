# LunarLoom Mail Service

The LunarLoom Mail Service is responsible for sending emails within the LunarLoom microservice chat application. It utilizes Node Js, Rabbit MQ, to quickly send emails to the users.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- Sending account verification emails upon user registration
- Password reset email functionality
- Notification emails for important events within the chat application
- Integration with SMTP or transactional email services for reliable delivery

## Technologies Used
- Node JS
- nodemailer
- Rabbit MQ
- SMTP

## Usage
Once the email service is running locally, it reads messages in the message queue and sends emails accordingly.

## Contributing
Contributions are welcome! To contribute to this project:
1. Fork the project
2. Clone the fork
    ```git
    git clone https://github.com/<your-username>/LunarLoom-mail-service
    ```

3. Add Upstream
    ```git
    git remote add upstream https://github.com/LoomingLunar/LunarLoom-mail-service
    ```

4. Craete a new branch
    ```git
    git checkout -b feature
    ```

5.  Make your changse
6. Commit your changes
    ```git
    git commit -am "Add new feature"
    ```

7. Update main
    ```git
    git checkout main
    git pull upstream main
    ```

8. Rebase to main
    ```git
    git checkout feature
    git rebase main
    ```

    if there is any conflict you need to fix it.
9. Push to the branch
    ```git
    git push origin feature
    ```

10. Create new Pull Request

## LICENSE

LunarLoom Mail Service - Mail Service for LunarLoom End To End Encrypted Chat App.

Copyright (C) 2023  LunarLoom

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

[GPLv3](LICENSE)
