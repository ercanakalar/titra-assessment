How to run the application:
  In the client folder, you need to run yarn to get node_modules.
  After that, in the main folder, you should run npm install.
  Then, open the terminal and run 'npm run dev'.
  It will direct you to http://localhost:3000/.
  In the right corner, you will see a square.
  After you click it, you may click somewhere in the map and move the mouse. When you click the second time, you will see the rectangle in the map.
  When you click anywhere in the rectangle, you will see a form.
  If you do not give a value to the Input, the validation will not allow you to send it.
  When you write a name, and click send, you will see the area's value in the popup.
 

Explanation:
  In the client/src/components, I create resuable button and input elements. It is for resuable components.
  In the client/src/utils, I used only functions or constant values. It is keep pure fuctions.
  In the client/src/features, it will keep the pages.
  
  I used leaflet for first time. Therefore, I examine documantation and different project which have been done. When I establish the react-leaflet with basic map, I couldn't reach map correctly. Then, I used the leaflet's documantation and copy past the link tags in the index.html. However, the biggest problem was calculataion of the area. While doing some search, I found a feature, which is toGeoJSON, at EditControl in react-leaflet-draw. Then, I take it from the onCreate function's event by using event.layer.toGeoJSON. So, I found each position of the rectangle. While searching, I found the turf. Then, I used it to calculate the area.
  

"<link
"      rel="stylesheet"
"      href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.min.css"
"/>
"<link
"      rel="stylesheet"
"      href="//cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css"
" />

https://stackoverflow.com/questions/47905239/react-leaflet-draw-accessing-a-polygons-array-of-coordinates-on-save
https://datatracker.ietf.org/doc/html/rfc7946#section-3.2
