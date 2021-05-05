import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

function Login() {
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
                {/* <p>Login</p> */}
            </IonContent>
        </IonPage>
    );
}

export default Login;