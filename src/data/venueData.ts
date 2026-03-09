export const venueData = {
  agreement: {
    "agreement_title": "FIRE FIGHTERS' MEMORIAL BUILDING CORPORATION - HALL RENTAL AGREEMENT",
    "parties": {
      "lessor": "Fire Fighters Memorial Building Corporation (Florida Not For Profit Corporation)",
      "principal_address": "8000 NW 21 Street, Suite 222, Miami, FL 33122",
      "lessee": "To be specified in executed agreement"
    },
    "articles": {
      "Article I - Premises and Event": {
        "premises_address": "8000 NW 21 Street, Suite 222, Miami, FL 33122",
        "includes": [
          "Use of tables",
          "Use of chairs",
          "Use of stage",
          "Use of dance floor"
        ],
        "notes": [
          "Large stage and additional add-ons require additional fee",
          "Premises not reserved until Deposit clears (see Article III)",
          "Premises may only be used for described Event"
        ]
      },
      "Article II - Rental Fee": {
        "payment_due": "No later than 14 days prior to Event",
        "minimum_rental_hours": 4,
        "additional_event_time_fee_per_hour_usd": 200,
        "additional_setup_breakdown_fee_per_hour_usd": 100,
        "cleanup_extended_fee_minimum": "Additional 4-hour rental required if breakdown not completed same day",
        "late_fee_policy": {
          "late_fee_per_day_usd": 25,
          "applies_from": "Day after due date until paid in full"
        },
        "termination_rights": "Building Corp may terminate agreement for non-payment"
      },
      "Article III - Deposit and Damages": {
        "deposit_amount_usd": 700,
        "deposit_required_to_reserve": true,
        "cancellation_policy": {
          "45_days_prior": "100% refund",
          "30_days_prior": "50% refund",
          "within_30_days": "Non-refundable"
        },
        "inspection_period_hours": 48,
        "deposit_refund_period_days": 14,
        "cleaning_fee_if_needed_usd": 200,
        "lessee_responsible_for_damages": true,
        "building_corp_may_deduct_fees_from_deposit": true
      },
      "Article IV - Default": {
        "termination_without_notice_allowed": true,
        "legal_action_rights_reserved": true,
        "late_fee_per_day_usd": 25
      },
      "Article V - Form of Payment": {
        "accepted_methods": [
          "Cash",
          "Major credit cards",
          "Cashier’s check",
          "Personal check"
        ],
        "returned_check_fee_usd": 35,
        "credit_card_service_fee_possible": true
      },
      "Article VI - Food Preparation": {
        "commercial_kitchen_use": "Permitted for licensed and insured caterers only",
        "insurance_required": true,
        "insurance_minimum_coverage_usd": 1000000,
        "certificate_of_insurance_required_days_prior": 14,
        "coi_must_name": "Firefighters Memorial Building 8000 NW 21 Street, Suite 222, Miami, FL 33122"
      },
      "Article VII - Alcoholic Beverages": {
        "liquor_license_required": true,
        "license_from": "State of Florida",
        "insurance_minimum_coverage_usd": 1000000,
        "certificate_required_days_prior": 14,
        "bar_use_fee_usd": 250,
        "coi_must_name": "Firefighters Memorial Building 8000 NW 21 Street, Suite 222, Miami, FL 33122"
      },
      "Article VIII - Inspection, Security, and Alternate Hall": {
        "inspection_right": true,
        "security_may_be_required": true,
        "alternate_hall_right_reserved": true,
        "lessee_pays_difference_if_larger_hall_required": true
      },
      "Article IX - Indemnification and Waiver": {
        "indemnification_required": true,
        "hold_harmless_clause": true,
        "property_loss_release": true
      },
      "Article X - Miscellaneous": {
        "governing_law": "State of Florida",
        "venue": "Miami-Dade County, Florida",
        "force_majeure_clause": true,
        "attorney_fees_clause": true,
        "radon_disclosure": true
      },
      "Article XI - Media Policy": {
        "prohibited_use_without_written_approval": true,
        "logos_and_trademarks_require_permission": true
      },
      "Article XII - Nuisance": {
        "prohibited_behavior_examples": [
          "Excessive noise",
          "Disruptive behavior",
          "Public disturbances",
          "Illegal activities",
          "Any nuisance activity"
        ],
        "termination_without_refund_if_violation": true,
        "future_service_may_be_refused": true
      }
    },
    "execution": "Executed as of the day and year written in final signed agreement"
  },
  amenities: {
    "venue": {
      "name": "Fire Tower Miami",
      "industry": "Event venue (meetings, weddings, parties, corporate events)",
      "location": {
        "city_area": "Doral, Miami, Florida",
        "nearby_landmark": "Close to Miami International Airport",
        "address": "Firefighters Memorial Building, 8000 NW 21st St, Miami, FL 33122"
      },
      "contact": {
        "phone": "(305) 593-6100 OPT #1",
        "email": "BOOKINGS@FIRETOWERMIAMI.COM"
      },
      "office_hours": {
        "monday": "8:00 AM - 5:00 PM",
        "tuesday": "8:00 AM - 5:00 PM",
        "wednesday": "8:00 AM - 5:00 PM",
        "thursday": "8:00 AM - 5:00 PM",
        "friday": "8:00 AM - 5:00 PM"
      }
    },
    "spaces": [
      {
        "name": "Main Ballroom",
        "type": "Indoor",
        "size_sq_ft": 8126,
        "max_capacity": {
          "cocktail": 500,
          "theater": 600,
          "banquet": 450,
          "banquet_with_dance_floor": 380
        },
        "included_equipment": {
          "chairs_max": 550,
          "round_tables_max": 45,
          "rectangular_tables_max": 50,
          "cocktail_tables_max": 10,
          "stage_max_size_ft": "12 x 18",
          "dance_floor_max_size_ft": "18 x 18"
        }
      },
      {
        "name": "Outdoor Terrace & Patio",
        "type": "Outdoor",
        "max_capacity": {
          "standing_or_mixed": 180
        }
      }
    ],
    "services": {
      "event_types_supported": [
        "Weddings",
        "Corporate events",
        "Meetings",
        "Private parties",
        "Baby showers",
        "Expos",
        "Galas"
      ],
      "core_services": [
        "Venue rental",
        "Catering services",
        "Event design and production",
        "Alcohol service",
        "Hotel recommendations"
      ],
      "accessibility": [
        "Handicap accessible facilities"
      ]
    },
    "parking": {
      "on_site_spaces": 167,
      "additional_capacity_estimate": 100
    },
    "booking": {
      "methods": [
        "Online booking form",
        "Phone",
        "Email"
      ],
      "event_end_time": "Events allowed up to 1:00 AM",
      "rental_structure": {
        "setup_hours": 2,
        "event_hours": 4,
        "breakdown_hours": 2
      }
    }
  }
};
