import React, { useState } from "react";
import { Text, Button } from "react-native-elements";
import { useEldenRingClass } from "@/hooks/useEldenRingClass";
import ClassDetailsScreen from "@/screens/ClassDetailsScreen";

export default function RandomClass() {
    const [classData, setClassData] = useState(null);

    // Fonction pour sélectionner une classe aléatoire
    const selectRandomClass = async () => {
        try {
            const classes = await useEldenRingClass();
            const randomIndex = Math.floor(Math.random() * classes.length);
            const randomClass = classes[randomIndex];
            setClassData(randomClass);
        } catch (error) {
            console.error('Error selecting random class:', error);
        }
    };

    return (
        <>
            <Button className="m-4" title="Sélectionner une classe aléatoire" onPress={selectRandomClass} />
            {classData && (
                <ClassDetailsScreen route={{ params: classData }} />
            )}
        </>
    );
}
