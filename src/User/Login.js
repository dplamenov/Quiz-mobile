import React, { useState } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonButton } from '@ionic/react';

function Login() {
    const [email] = useState("test@gmail.com");

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
                </IonList>
                <IonButton color="primary">Login</IonButton>
            </IonContent>
        </IonPage>
    );
}

export default Login;