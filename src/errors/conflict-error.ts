import { ApplicatonError } from "@/protocol";

export function conflictError(message: string): ApplicatonError {
    return {        
        name: "Conflict Error",
        message,
    }    
}