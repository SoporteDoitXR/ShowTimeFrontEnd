import React, { useEffect, useState } from "react";
import ZoomMtgEmbedded from '@zoomus/websdk/embedded';
import { ZoomMtg } from '@zoomus/websdk';
import { getUserData } from "../../providers/cookie-user";
import Div from "../canvas2d/div";

const client = ZoomMtgEmbedded.createClient();

const Zoom = ({ conferenceData }) => {

    var apiKey = conferenceData?.apiKey //'B21BRG6-QD6HRMly9tSEPQ';
    var apiSecret = conferenceData?.apiSecret //"rBNn7SrqGBGGX8RCMmpiTLk2SwY8h7PGNOLe";
    var meetingNumber = conferenceData?.meetingNumber //74008753783;
    var role = conferenceData?.role //0;
    var leaveUrl = conferenceData?.leaveUrl //'http://localhost:3001/reception';
    var userName = getUserData();
    var userEmail = conferenceData?.userEmail //'yerarias23@gmail.com';
    var passWord = conferenceData?.passWord //"Xz1Qz3";
    //var token = //"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IkIyMUJSRzYtUUQ2SFJNbHk5dFNFUFEiLCJleHAiOjE2NTM1MzQ0NzgsImlhdCI6MTY1MzUyOTA3OX0.kDbA6PUN8n88a3DpDKJ_5KN8ruzjZgIWZJAQ5wUbNgk"
    var signature = "";
      
    signature = ZoomMtg.generateSignature({
        meetingNumber : meetingNumber,
        apiKey : apiKey,
        apiSecret: apiSecret,
        role: role,
        success: res => {
            console.log(res.result);
        }
    })

    useEffect(() => {
        if(apiKey != ""){
            let meetingSDKElement = document.getElementById('meetingSDKElement');
            let meetingSDKChatElement = document.getElementById('meetingSDKChatElement')

            client.init({
                debug: true,
                zoomAppRoot: meetingSDKElement,
                language: 'en-US',
                leaveUrl: leaveUrl,
                videoDrag: false,
                customize: {
                    meetingInfo: ['topic', 'host', 'mn', 'pwd', 'telPwd', 'invite', 'participant', 'dc', 'enctype'],
                    video: {
                        disableDraggable: true,
                        viewSizes: {
                            default: {
                                width: 1000,
                                height: 600
                                //width: 992,
                                //height: 300
                            },
                            ribbon: {
                                width: 300,
                                height: 700
                            }
                        }
                    },
                    chat: {
                        popper: {
                          disableDraggable: true,
                          //anchorElement: meetingSDKChatElement,
                          placement: 'right'
                        }
                    }
                }
            });
        
            client.join({
                apiKey: apiKey,
                signature: signature,
                meetingNumber: meetingNumber,
                password: passWord,
                userName: `${userName.name} ${userName.lastname}`,
                userEmail: userEmail,
                success: (success) => {
                    console.log('success');
                },
                error: (error) => {
                    console.log(error);
                }
            });
        }
    },[apiKey])

  return (
    <>
        <div id="meetingSDKElement" className="zoom-full"></div>
        {/*<Div
            width={"496"}
            height={"536"}
            positionY={"193"}
            positionX={"-497"}
            zIndex={1}
  
            <div id="meetingSDKChatElement"></div>
        </></Div>*/}
        
    </>
  );
};

export default Zoom;
