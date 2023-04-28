How to run the application:
  In the client folder, you need to run yarn to get node_modules.
  After that, in the main folder, you should run npm install.
  Then, open the terminal and run 'npm run dev'.
  It will direct you to http://localhost:3000/.
  In the right corner, you will see a square.
  After you click it, you may click somewhere in the map and move the mouse. When you click the second time, you will se the rectangle in the map.
  There will be a merker which is the center of the rectangle.
  When you click the marker, you will see a form.
  If you do not give a value to the Input, the validation will not allow you to send it.
  When you write a name, and click send, you will see the area's value in the popup.
 

Explanation:
  In the client/src/components, I create resuable button and input elements. It is for resuable components.
  In the client/src/utils, I used only functions or constant values. It is keep pure fuctions.
  In the client/src/features, it will keep the pages.
  
  I used leaflet for first time. Firstly, I examine documantation and different project which have been done. 
