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
                'position' => 'Application Engineer Intern'
                'profile' => 'backend'
            ],
            'workplace' => [
                'company' => 'Agency Coda',
                'position' => 'Freelance Software Engineer'
                'profile' => 'flutter'
            ],
            'workplace' => [
                'company' => 'Script Foundation',
                'position' => 'Software Engineer Intern'
                'profile' => 'flutter'
            ],
            'workplace' => [
                'company' => 'Enappd Technologies',
                'position' => 'Software Engineer Intern'
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
