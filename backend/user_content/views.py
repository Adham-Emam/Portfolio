from rest_framework import generics
from .models import Skill, Timeline
from .serializers import SkillSerializer, TimelineSerializer

class SkillList(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class TimelineList(generics.ListAPIView):
    queryset = Timeline.objects.all()
    serializer_class = TimelineSerializer

    def get_queryset(self):
        type = self.request.query_params.get('type')
        if type:
            return Timeline.objects.filter(type=type)
        return Timeline.objects.all()