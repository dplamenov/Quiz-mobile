import React, { useState } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonButton, useIonAlert } from '@ionic/react';

function Login() {
    const [email] = useState("test@gmail.com");
    const [present] = useIonAlert();

    const loginHandler = () => {
        present({
            cssClass: 'my-css',
            header: 'Alert',
            message: 'alert from hook',
            buttons: [
                'Cancel',
                { text: 'Ok', handler: (d) => console.log('ok pressed') },
            ],
            onDidDismiss: (e) => console.log('did dismiss'),
        })
    }
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Login</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList>
                <IonItem>
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput value={email}></IonInput>
                </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput value={email} type="password"></IonInput>
                    </IonItem>
                </IonList>
                <IonButton expand="block" onClick={loginHandler}>Login</IonButton>
                {/* <IonRouterLink href="/register">Register</IonRouterLink> */}
            </IonContent>
        </IonPage>
    );
}

export default Login;