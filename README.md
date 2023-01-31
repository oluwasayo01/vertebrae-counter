# vertebrae-counter
This project demonstrates the use of YOLOv3 algorithm interfaced by a Django api for receiving x-ray images of knockout mice and detecting the vertebrae. The User Interface is implemented in react.

## Start up
To start up the application locally, clone the repo then run the command below within the repository folder
```bash
docker compose up --build
```

or

```bash
./start-local.sh
```

```
Note:
If you are unable to start up the application locally, there is a deployed version accessible using this address: http://54.227.62.81:8500/
```

Navigate to `http://localhost:8500" to see the User Interface of the application.

## Test App
To test the application, you will need mice x-ray images. A few images can be found in the [images/samples](./images/samples/) folder.

Download an image and then select this image from the vertebrae counter interface and then hit the `Send` button.
![Alt text](./images/doc/before-detection.png "Before Detection")

The image wil be sent to the django backend which will pass the image through the trained yolo model and generated co-ordinates of bounding boxes for every vertebrae it detects. 

![Alt text](./images/doc/after-detection.png "After Detection")



These values are then plotted on the image using the the React library known as `react-bounding-box`.
