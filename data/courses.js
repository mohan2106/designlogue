  export const ALL_COURSES = [
    {
        id: 'foundationBatch',
        name: 'Foundation Course',
        description: 'A 2 year programme designed for class 11 going students.',
        eligibility: ['10th', '11th'],
        tags: ['class 10th and 11th', '2 year'],
        price: {
            originalPrice: '40,000',
            discount: '50%',
            newPrice: '20,000'
        },
        duration: '2 year',
        features: {
            included: [
                'study materials',
                'doubt counters',
                '1-1 mentorship',
                'NID, NIFT, UCEED',
                'weekly exams',
                '5 classes weekly'
            ],
            excluded: [],
        },
    },
    {
        id: 'targetBatch',
        name: 'Target Course',
        description: 'A 1 year programme designed for class 12th and drop year students.',
        eligibility: ['12th', '13th'],
        tags: ['class 12th and 13th', '1 year'],
        price: {
            originalPrice: '25,000',
            discount: '40%',
            newPrice: '15,000'
        },
        duration: '1 year',
        features: {
            included: [
                'study materials',
                'doubt counters',
                '1-1 mentorship',
                'NID, NIFT, UCEED',
                'weekly exams',
                '5 classes weekly'
            ],
            excluded: [],
        }
    },
    {
        id: 'crashBatch',
        name: 'Crash Course',
        description: 'A 3-4 month programme designed for class 12th and drop year students.',
        eligibility: ['12th', '13th'],
        tags: ['class 12th and 13th', '3-4 months'],
        price: {
            originalPrice: '15,000',
            discount: '33%',
            newPrice: '10,000'
        },
        duration: '3-4 months',
        features: {
            included: [
                'study materials',
                'doubt counters',
                '1-1 mentorship',
                'NID, NIFT, UCEED',
                'weekly exams',
                '6 classes weekly'
            ],
            excluded: [],
        }
    }
  ];