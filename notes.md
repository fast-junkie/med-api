--patient-schema
```typescript
interface Patient {
  patient_id: string;     // pid year.[pm|pf].milliseconds
  patient_name: string;
  gender: string;         // Male|Female
  date_of_birth: string;  // yyyy-mm-dd
  visit_date: string;     // yyyy-mm-dd
  symptoms: string;
  diagnosis: string;
  medication: string;
  dosage: string;
}
```

--patient-schema-data
```json
[
  {
    "patient_id": "2112.pm.4509022199000",
    "patient_name": "Derek Solaris",
    "gender": "Male",
    "date_of_birth": "2095-04-15",
    "visit_date": "2112-11-18",
    "symptoms": "Severe depression, auditory hallucinations of music, and visions of a brighter world.",
    "diagnosis": "Psychological Distress due to Oppressive Regime",
    "medication": "Sonic Therapy",
    "dosage": "1 hour daily exposure to approved sound frequencies"
  },
  {
    "patient_id": "2112.pf.4509022439000",
    "patient_name": "Lyra Voss",
    "gender": "Female",
    "date_of_birth": "2098-09-22",
    "visit_date": "2112-11-18",
    "symptoms": "Chronic fatigue, feelings of hopelessness, and a yearning for artistic expression.",
    "diagnosis": "Creative Block and Emotional Exhaustion",
    "medication": "Artistic Rejuvenation Sessions",
    "dosage": "2 sessions per week with a licensed facilitator"
  }
]
```
