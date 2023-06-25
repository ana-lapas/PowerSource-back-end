import { ApplicatonError } from "@/protocol";

export function missingInformationError(message: string): ApplicatonError {
    return {        
        name: "Missing Information Error",
        message,
    }    
}