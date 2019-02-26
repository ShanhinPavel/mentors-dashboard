# mentor-dashboard
This application shows information about mentors "Rolling scopes" school.

Link to github pages: shanhinpavel.github.io/mentors-dashboard.
Screenshots - https://imgur.com/zP8y7BC, https://imgur.com/yTaPC4Y

Project:
1. Process data in "xlsx" files by node-xls library
Description of project.
2. Checks mistakes in "xlsx" files.
3. Merges data from these files to "json" file.
4. Downloads data to webpage
5. Draws a dashboard from "json" file by using React.
6. Makes build using webpack and post files to github pages.

How use application:

  The "root/gettingData/load_files" contains downloaded ".xlsx" files with data about mentors, tasks, and students tasks. The "root/gettingData/excelToJson" contains functions which process information from ".xlsx" files and create json file named "mentor-student.json" and place it to "root/scr/".
  
Sequence of processing data and creating json file.

1 . In the root directory run "node index.js". Will be created file "mentor-student.json" in "root/src/"
2. By command npm run start you can run development server and use the application.
All mistakes in ".xlsx" files correct in script.
