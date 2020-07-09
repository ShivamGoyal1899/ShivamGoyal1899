```dart

title ShivamGoyal;

class About extends Me
{
    Present<> getWorkplace()
    {
        return [
            'workplace' => [
                'company' => 'GoTo',
                'position' => 'Chief Technology Officer'
            ]
        ];
    }

    Now<> getTechStack()
    {
        return [
            'languages' => [  '.dart' '.cpp' '.py' '.js' '.ts' '.java'  ],
            'frameworks' => [  'flutter' 'firebase' 'node' 'django' 'react'  ],
            'devops' => [  'git' 'docker' 'k8s' 'jira' 'jenkins' 'ansible'  ],
            'softwares' => [  'android-studio' 'vs-code' 'chrome' 'windows-terminal'  ],
            'communication' => [  'slack' 'ms-teams' 'google-chat' 'google-meet'  ]
        ];
    }
    
    Past<> getExperience()
    {
        return [
            'workplace' => [
                'company' => 'Crossplay LLC',
                'position' => 'Software Developer'
            ],
            'workplace' => [
                'company' => 'Enappd Technologies',
                'position' => 'Software Development Engineer Intern'
            ]
        ];
    }
    
    Ongoing<> getEducation()
    {
        return [
            'education' => [
                'college' => 'Thapar Institute of Engineering & Technology',
                'degree' => 'Bachelor of Engineering',
                'major' => 'Computer Engineering',
                'specialization' => 'CyberSec'
            ]
        ];
    }

    Future<> getGoals()
    {
        return [
            'To contribute to open source.',
            'To make the world a better place.',
            'To bond with technically grown up minds.',
            'To be happy with life.'
        ];
    }
}
```
