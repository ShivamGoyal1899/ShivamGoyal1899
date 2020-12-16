```dart

title ShivamGoyal;

class About extends Me
{
    Upcoming<> getFuture()
    {
        return [
            'workplace' => [
                'company' => 'TBU',
                'position' => '404 Not Found'
            ]
        ];
    }

    Skills<> getTechStack()
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
                'company' => 'Enappd Technologies',
                'position' => 'Software Engineer Intern - Flutter & ML Dev'
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
                'focus' => 'Information and Cyber Security'
            ]
        ];
    }
}
```
