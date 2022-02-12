```dart

title ShivamGoyal;

class About extends Me
{
    Future<> getLife()
    {
        return [
            'workplace' => [
                'company' => 'Navi Technologies',
                'position' => 'Software Development Engineer',
                'profile' => 'backend'
            ]
        ];
    }

    Present<> getWork()
    {
        return [
            'workplace' => [
                'company' => 'Agency Coda',
                'position' => 'Software Engineer',
                'profile' => 'flutter'
            ]
        ];
    }

    Skills<> getTechStack()
    {
        return [
            'languages' => [  '.cpp' '.c' '.java' '.dart' '.py' '.js' '.html' '.css'  ],
            'frameworks & ide' => [  'flutter' 'firebase' 'android-studio' 'vs-code' 'intellij'  ],
            'vcs & devops' => [  'git' 'mercurial' 'github' 'trello' 'docker' 'k8s' 'jira' 'jenkins'  ],
            'cloud' => [  'gcp' 'azure' 'google-maps'  ],
            'misc' => [  'os' 'networks' 'linux' 'sdlc' 'cryptography' 'unit-testing' 'api'  ]
        ];
    }
    
    Past<> getExperience()
    {
        return [
            'workplace' => [
                'company' => 'Google LLC',
                'position' => 'Application Engineer'
                'profile' => 'backend'
            ],
            'workplace' => [
                'company' => 'Agency Coda',
                'position' => 'Software Engineer'
                'profile' => 'flutter'
            ],
            'workplace' => [
                'company' => 'Script Foundation',
                'position' => 'Software Engineer'
                'profile' => 'flutter'
            ],
            'workplace' => [
                'company' => 'Enappd Technologies',
                'position' => 'Software Engineer'
                'profile' => 'flutter'
            ]
        ];
    }
    
    Ongoing<> getEducation()
    {
        return [
            'education' => [
                'college' => 'Thapar Institute of Engineering & Technology',
                'degree' => 'Bachelor of Engineering',
                'major' => 'Computer Science & Engineering',
                'focus' => 'Information and Cyber Security'
            ]
        ];
    }
}
```
